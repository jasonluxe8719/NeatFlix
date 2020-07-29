![NeatFlix Logo](https://neatflix-seeds.s3.amazonaws.com/nf_logo.png)

**NeatFlix is a web app clone of Netflix that allows subscribed users to experience quality home television services with a wide variety of available videos.**


[NeatFlix Live](https://neatflix.herokuapp.com/#/)


# **Technologies Used**

* Back-End: Ruby on Rails, PostgreSQL, AWS S3 (for videos and photos storage)
* Front-End: React, Redux, CSS


# **Features**

### Videos Playinng on Hover and Images Displaying on Mouse-Out

```c
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
 
 ### Search Videos by Title or Genre
 
 Used jQuery's $.ajax() function to search for and fetch videos based on a keyword and then render videos that match the conditions.
 
 ```c
 class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      keyword: '',
      videos: ''
    }

    this.update = this.update.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  update(field) {
    return e => (
      this.setState({ [field]: e.target.value })
    );
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({ videos: this.props.searchVideos(this.state.keyword) });
  }
 ```
 
 ### Upcoming Features
 
 * Videos Carousel Effect
 * My List to add and remove a list of favorite videos


