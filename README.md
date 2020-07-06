![NeatFlix Logo](https://neatflix-seeds.s3.amazonaws.com/nf_logo.png)

**NeatFlix is a web app clone of Netflix that allows subscribed users to experience quality home television services with a wide variety of available videos.**


[NeatFlix Live](https://neatflix.herokuapp.com/#/)


# **Technologies Used**

* Back-End: Ruby on Rails, PostgreSQL, AWS S3 (for videos and photos storage)
* Front-End: React, Redux, CSS


# **Features**

### Videos Playinng on Hover and Images Displaying on Mouse-Out

```
  handleHover(e) {
    e.target.muted = false;
    e.target.play();
  }
  

  handleHide(e) {
    e.target.pause();
  }

  render() {
    const { featured } = this.props;

    return (
      <div>
        <video
          src={featured.clip}
          poster={featured.photo}
          className="featured-video"
          onMouseOver={this.handleHover}
          onMouseOut={this.handleHide}
          muted="muted"
        />
      </div>
    )
  }
 ```


