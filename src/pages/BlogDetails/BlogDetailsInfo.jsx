import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import blogPosts from "../../blog.js";

const BlogDetailsInfo = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogPosts);
  }, []);

  const { blogId } = useParams();
  const findBlog = blogs && blogs.find((blog) => blog.id === parseInt(blogId));

  return (
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="col">
            <div className="row">
              <div className="breadcrumb-index">
                <ul className="breadcrumb-ul">
                  <li className="breadcrumb-li">
                    <Link className="breadcrumb-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-li">
                    <span className="breadcrumb-text">Blog Details</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="article-area section-pt">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="blog-article-wrapper without-wrap">
                <div className="blog-article-wrap blog-article">
                  <div className="article-blog-post">
                    <div className="blog-post-opt blog-post-img">
                      <div className="blog-image">
                        <Link to="#" className="banner-img">
                          <img
                            src={findBlog && findBlog.img}
                            className="img-fluid"
                            alt="article-01"
                          />
                        </Link>
                        <ul>
                          <li className="date-time">
                            <span>Sep 25, 2025</span>
                          </li>

                          <li className="blog-comment">
                            <span className="comment-count">2 comments</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="blog-post-opt blog-post-title">
                      <div className="blog-revert">
                        <h6 className="post-title">
                          {findBlog && findBlog.title}
                        </h6>

                        <div className="post-info">
                          <span>By Spacing Tech</span>
                        </div>
                      </div>
                    </div>

                    <div className="blog-post-opt blog-post-content">
                      <div className="blog-content">
                        <div className="blog-wrap-desc">
                          <p>{findBlog && findBlog.desc}</p>
                        </div>
                      </div>
                    </div>

                    <div className="blog-post-opt blog-post-icon">
                      <div className="blog-share">
                        <ul className="social-icon">
                          <li>
                            <Link to="#">
                              <span className="icon-social facebook">
                                <FaFacebookF />
                              </span>
                            </Link>
                          </li>

                          <li>
                            <Link to="#">
                              <span className="icon-social twitter">
                                <FaTwitter />
                              </span>
                            </Link>
                          </li>

                          <li>
                            <Link to="#">
                              <span className="icon-social pinterest">
                                <FaPinterestP />
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="blog-comments">
                    <div className="review-comment">
                      <div className="cmt-tit-count">
                        <h6 className="comment-title">
                          <span className="cmt-title">Comment</span>
                          <span className="cmt-count">(1)</span>
                        </h6>
                      </div>
                      <div className="cmt-info-wrap">
                        <div className="comment-info">
                          <div className="comment-avtar">
                            <div className="review-name">
                              <span className="avtar-cmt">
                                <span className="cmt-auth">Ol</span>
                              </span>
                            </div>
                            <div className="review-info">
                              <span className="cmt-authr">
                                {findBlog && findBlog.author}
                              </span>

                              {findBlog &&
                                `${findBlog.date} ${findBlog.month} ${findBlog.year}`}
                              {/* {findBlog && findBlog.date + " " + findBlog.month + " " + findBlog.year} */}
                            </div>
                          </div>
                          <div className="comment-content">
                            <div className="comment-desc">
                              <p>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-comment-form">
                      <form method="post" className="comment-form">
                        <div className="comments-reply-area">
                          <h6 className="comment-title">Leave Link comment</h6>
                          <div className="form-wrap">
                            <div className="form-filed">
                              <label>
                                Name<span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="comment[author]"
                                placeholder="Name"
                              />
                            </div>
                            <div className="form-filed">
                              <label>
                                Email address<span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="comment[author]"
                                placeholder="Email address"
                              />
                            </div>
                            <div className="form-filed">
                              <label>
                                Message<span className="required">*</span>
                              </label>
                              <textarea
                                rows="5"
                                className="comment-notes"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="comment-form-submit">
                            <button className="btn btn-style2">
                              Post comment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsInfo;
