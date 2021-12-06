import React, { Dispatch, useEffect, useState } from 'react';

import { Avatar, Rate, Button, Comment, Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import dayjs from 'dayjs';
import { useRouter } from 'next/dist/client/router';
import { toast, ToastContainer } from 'react-toastify';

import TextHeader from 'common/components/TextHeader';
import Intersperse from 'common/hooks/Intersperse';
import commentsController from 'common/services/Controllers/commentsControllers';
import repliesControllers from 'common/services/Controllers/repliesControllers';
import userController from 'common/services/Controllers/userController';
import { CreateCommentRequest, CreateRepliesRequest } from 'common/services/postSchemas';
import { Actor } from 'common/services/reponseInterface/actor.interface';
import { Review } from 'common/services/reponseInterface/review.interface';
import { User } from 'common/services/reponseInterface/user.interface';

const ReviewCard: React.FC<{
  review: Review;
  loading: boolean;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
}> = ({ review, setLoading, loading }) => {
  const [user, setUser] = useState<User>();
  const [replayId, setReplayId] = useState<number>();

  const Router = useRouter();
  const [form] = Form.useForm<{ message: string; messageReplies: string }>();

  const { getUsersProfile } = userController();
  const { postComments } = commentsController();
  const { postReplies } = repliesControllers();

  useEffect(() => {
    getUsersProfile().then((res) => {
      setUser(res);
    });
  }, []);

  const handleSubmit = async (
    values: { message: string; messageReplies: string },
    id?: number,
  ) => {
    const { message, messageReplies } = values;

    if (message) {
      const param: CreateCommentRequest = {
        reviewID: review.id,
        message: message,
      };

      postComments(param)
        .then((res) => {
          console.log('postComments', res);
          form.resetFields();
          setLoading(true);
        })
        .catch(() => {
          toast.error('Fail to comment message', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }

    if (messageReplies && id) {
      const param: CreateRepliesRequest = {
        commentID: id,
        message: messageReplies,
      };

      postReplies(param)
        .then((res) => {
          console.log('postReplies', res);
          form.resetFields();
          setLoading(true);
        })
        .catch((err) => {
          toast.error(err.message, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  return (
    <div className="w-full h-full rounded-2xl bg-primary-defaultDark opacity-90 p-4 mb-4">
      <div className="flex justify-between gap-2">
        <img
          src={review.movie.bannerImageUrl}
          alt="banner"
          className="object-cover w-52 h-full rounded-2xl"
        />
        <div className="block">
          <div className="flex gap-2 items-baseline mb-2">
            <div className="text-xl italic">{review.movie.title}</div>
            <div className="text-lg italic">({dayjs(review.movie.startDate).year()})</div>
          </div>
          <div className="flex flex-1 gap-2">
            <div className="flex-1">
              <div className="w-full h-48 bg-primary-purpleDark2nd rounded-2xl px-4 py-2 mb-2">
                <div className="text-lg text-primary-defaultLight">Synopsis</div>
                <div className="text-sm">{review.movie.description}</div>
              </div>
              <div className="w-full h-16 bg-primary-purpleDark2nd rounded-2xl px-4 py-2">
                <div className="block text-center">
                  <div className="text-2xl">
                    <Rate disabled defaultValue={review.movie.score} />
                  </div>
                  <div className=" text-xs">From over Nawa-lee</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full h-48 bg-primary-purpleDark2nd rounded-2xl px-4 py-2 mb-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-lg text-primary-defaultLight">Release date</div>
                    <div className="text-sm">
                      {dayjs(review.movie.startDate).format('MMMM DD, YYYY')}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg text-primary-defaultLight">Directed by</div>
                    <div className="text-sm">
                      {review.movie.director.firstName} {review.movie.director.lastName}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg text-primary-defaultLight">Genre</div>
                    <div className="text-sm">
                      {Intersperse(review.movie.categories, ', ').map(
                        (tag: string, index: number) => (
                          <span key={index}>{tag}</span>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg text-primary-defaultLight">Starring</div>
                    {review.movie.actors.map((actor: Actor, index: number) => {
                      if (index < 3) {
                        return (
                          <div
                            key={`${actor.firstName}-${index}`}
                            className="text-white text-sm">
                            {`${actor.firstName} ${actor.lastName}`}
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                    {review.movie.actors.length > 3 && (
                      <div className="text-gray-400 text-sm">
                        {`+ ${review.movie.actors.length - 3} more`}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full h-16 px-4 py-2 flex items-center justify-center">
                <Button
                  className="px-6 py-0 order-5 mr-6 font-poppins w-48"
                  type="primary"
                  size="large"
                  shape="round"
                  onClick={() => {
                    Router.push(`/movie/${review.movie.id}`);
                  }}>
                  See more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review my-4">
        <TextHeader className="mb-2">Review</TextHeader>
        <div className="w-full h-auto bg-primary-defaultLight2nd rounded-2xl px-8 py-4">
          <div className="text-sm">{review.message}</div>
        </div>
      </div>
      {user && (
        <div className="comment">
          <TextHeader className="mb-2">Comment</TextHeader>
          <div className="w-full h-auto bg-primary-defaultLight2nd rounded-2xl px-16 py-4">
            <Comment
              avatar={<Avatar src={user?.avatarUrl} alt="User avatar" />}
              content={
                <>
                  <Form
                    form={form}
                    name="comment"
                    onFinish={(data) => {
                      handleSubmit(data);
                    }}>
                    <Form.Item name="message">
                      <TextArea rows={3} />
                    </Form.Item>
                    <Button htmlType="submit" type="primary">
                      Add Comment
                    </Button>
                  </Form>
                </>
              }
            />
            {review.comments.map((comment) => (
              <Comment
                key={comment.id}
                actions={[
                  <span
                    className="text-white"
                    key="comment-nested-reply-to"
                    role="presentation"
                    onClick={() => {
                      console.log('reply to');
                      setReplayId(comment.id);
                    }}>
                    Reply to
                  </span>,
                ]}
                author={<a className="text-white">{comment.user.displayName}</a>}
                avatar={<Avatar src={comment.user.avatarUrl} alt="userImage" />}
                content={<p>{comment.message}</p>}>
                {comment.replies.map((reply) => (
                  <Comment
                    key={reply.id}
                    author={<a className="text-white">{reply.byUser.displayName}</a>}
                    avatar={<Avatar src={reply.byUser.avatarUrl} alt="userImage" />}
                    content={<p>{reply.message}</p>}
                  />
                ))}
                {comment.id === replayId && (
                  <Comment
                    avatar={<Avatar src={user?.avatarUrl} alt="User avatar" />}
                    content={
                      <>
                        <Form
                          form={form}
                          name="replies"
                          onFinish={(data) => {
                            handleSubmit(data, replayId);
                          }}>
                          <Form.Item name="messageReplies">
                            <TextArea rows={2} />
                          </Form.Item>
                          <Form.Item>
                            <Button htmlType="submit" type="primary">
                              Add Replay
                            </Button>
                          </Form.Item>
                        </Form>
                      </>
                    }
                  />
                )}
              </Comment>
            ))}
          </div>
        </div>
      )}

      {!user && (
        <div className="comment">
          <TextHeader className="mb-2">Comment</TextHeader>
          <div className="w-full h-auto bg-primary-defaultLight2nd rounded-2xl px-16 py-4">
            <Comment
              content={
                <>
                  <Form>
                    <Form.Item>
                      <TextArea rows={2} disabled />
                    </Form.Item>
                    <Form.Item>
                      <Button htmlType="submit" type="primary">
                        Please Login
                      </Button>
                    </Form.Item>
                  </Form>
                </>
              }
            />
            {review.comments.map((comment) => (
              <Comment
                key={comment.id}
                actions={[
                  <span
                    className="text-white"
                    key="comment-nested-reply-to"
                    role="presentation"
                    onClick={() => {
                      toast.warn('Please login before posting a comment.', {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    }}>
                    Reply to
                  </span>,
                ]}
                author={<a className="text-white">{comment.user.displayName}</a>}
                avatar={<Avatar src={comment.user.avatarUrl} alt="userImage" />}
                content={<p>{comment.message}</p>}>
                {comment.replies.map((reply) => (
                  <Comment
                    key={reply.id}
                    author={<a className="text-white">{reply.byUser.displayName}</a>}
                    avatar={<Avatar src={reply.byUser.avatarUrl} alt="userImage" />}
                    content={<p>{reply.message}</p>}
                  />
                ))}
              </Comment>
            ))}
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ReviewCard;
