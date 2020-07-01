# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Genre.destroy_all
Video.destroy_all
User.destroy_all

u1 = User.create({email: "demouser@neatflix.com", password: "123456"}) # demo user

g1 = Genre.create({name: "Action"})
g2 = Genre.create({name: "K-Dramas"})
g3 = Genre.create({name: "Comedy"})
g4 = Genre.create({name: "Anime"})

v1 = Video.create({title: "Jason Bourne", 
description: "Jason Bourne is a 2016 American action-thriller film directed by Paul Greengrass and written by Paul Greengrass and Christopher Rouse. It is the fifth installment of the Bourne film series and a direct sequel to The Bourne Ultimatum (2007).",
genre_id: g1.id,
video_type: "movie"
})

v1_clip = open("https://neatflix-seeds.s3.amazonaws.com/jasonbourne.mp4")
v1.clip.attach(io: v1_clip, filename: 'jasonbourne.mp4')
v1_photo = open("https://neatflix-seeds.s3.amazonaws.com/jasonbourne.jpg")
v1.photo.attach(io: v1_photo, filename: 'jasonbourne.jpg')

v2 = Video.create({title: "Mission: Impossible - Fallout",
description: "Ethan Hunt and the IMF team join forces with CIA assassin August Walker to prevent a disaster of epic proportions. Arms dealer John Lark and a group of terrorists known as the Apostles plan to use three plutonium cores for a simultaneous nuclear attack on the Vatican, Jerusalem and Mecca, Saudi Arabia. When the weapons go missing, Ethan and his crew find themselves in a desperate race against time to prevent them from falling into the wrong hands.",
genre_id: g1.id,
video_type: "movie"
})

v2_clip = open("https://neatflix-seeds.s3.amazonaws.com/missionimpossible.mp4")
v2.clip.attach(io: v2_clip, filename: 'missionimpossible.mp4')
v2_photo = open("https://neatflix-seeds.s3.amazonaws.com/missionimpossible.jpeg")
v2.photo.attach(io: v2_photo, filename: 'missionimpossible.jpeg')


v3 = Video.create({title: "The Walking Dead",
  description: "Based on the comic book series written by Robert Kirkman, this gritty drama portrays life in the months and years that follow a zombie apocalypse. A group of survivors travel in search of safety and security, constantly on the move in search of a secure home.",
  genre_id: g1.id,
  video_type: "tv"
})

v3_clip = open("https://neatflix-seeds.s3.amazonaws.com/walkingdead.mp4")
v3.clip.attach(io: v3_clip, filename: 'wakingdead.mp4')
v3_photo= open("https://neatflix-seeds.s3.amazonaws.com/walkingdead.jpg")
v3.photo.attach(io: v3_photo, filename: 'walkingdead.jpg')


v4 = Video.create({title: "Prison Break",
  description: "Michael Scofield is a desperate man in a desperate situation. His brother, Lincoln Burrows, was convicted of a crime he didn't commit and put on Death Row. Michael holds up a bank to get himself incarcerated alongside his brother in Fox River State Penitentiary, then sets in motion a series of elaborate plans to break Lincoln out and prove his innocence. Once out of jail, their perils aren't over -- the brothers must flee to escape recapture and battle an intricate political conspiracy that puts everyone's life at risk.",
  genre_id: g1.id,
  video_type: "tv"  
})

v4_clip = open("https://neatflix-seeds.s3.amazonaws.com/prisonbreak.mp4")
v4.clip.attach(io: v4_clip, filename: 'prisonbreak.mp4')
v4_photo = open("https://neatflix-seeds.s3.amazonaws.com/prisonbreak.jpeg")
v4.photo.attach(io: v4_photo, filename: 'prisonbreak.jpeg')


v5 = Video.create({title: "Kingdom",
  description: "While strange rumors about their ill king grips a kingdom, the crown prince becomes their only hope against a mysterious plague overtaking the land.",
  genre_id: g2.id,
  video_type: "tv"
})

v5_clip = open("https://neatflix-seeds.s3.amazonaws.com/kingdom.mp4")
v5.clip.attach(io: v5_clip, filename: 'kingdom.mp4')
v5_photo = open("https://neatflix-seeds.s3.amazonaws.com/kingdom.jpg")
v5.photo.attach(io: v5_photo, filename: 'kingdom.jpg')

v6 = Video.create({title: "Itaewon Class",
  description: "An ex-con and his friends fight to make their ambitious dreams for their street bar a reality.",
  genre_id: g2.id,
  video_type: "tv"
  })

v6_clip = open("https://neatflix-seeds.s3.amazonaws.com/itaewonclass.mp4")
v6.clip.attach(io: v6_clip, filename: 'itaewonclass.mp4')
v6_photo = open("https://neatflix-seeds.s3.amazonaws.com/itaewonclass.jpeg")
v6.photo.attach(io: v6_photo, filename: 'itaewonclass.jpeg')

v7 = Video.create({title: "The Office",
  description: "This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office).",
  genre_id: g3.id,
  video_type: "tv"
  })

v7_clip = open("https://neatflix-seeds.s3.amazonaws.com/theoffice.mp4")
v7.clip.attach(io: v7_clip, filename: "theoffice.mp4")
v7_photo = open("https://neatflix-seeds.s3.amazonaws.com/theoffice.jpeg")
v7.photo.attach(io: v7_photo, filename: 'theoffice.jpeg')

v8 = Video.create({title: "Friends",
  description: "Three young men and three young women -- of the BFF kind -- live in the same apartment complex and face life and love in New York. They're not above sticking their noses into one another's business and swapping romantic partners, which always leads to the kind of hilarity average people will never experience -- especially during breakups.",
  genre_id: g3.id,
  video_type: "tv"
  })

v8_clip = open("https://neatflix-seeds.s3.amazonaws.com/friends.mp4")
v8.clip.attach(io: v8_clip, filename: "friends.mp4")
v8_photo = open("https://neatflix-seeds.s3.amazonaws.com/friends.jpg")
v8.photo.attach(io: v8_photo, filename: 'friends.jpg')

v9 = Video.create({title: "Hancock",
  description: "A scruffy superhero named Hancock (Will Smith) protects the citizens of Los Angeles but leaves horrendous collateral damage in the wake of every well-intentioned feat. That's OK with Hancock; he doesn't care what people think and is just as likely to be found dozing on a park bench as saving a damsel in distress. However, after saving the life of a PR executive (Jason Bateman) and meeting the man's beautiful wife (Charlize Theron), he realizes that he may have a sensitive side after all.",
  genre_id: g3.id,
  video_type: "movie"
  })

v9_clip = open("https://neatflix-seeds.s3.amazonaws.com/hancock.mp4")
v9.clip.attach(io: v9_clip, filename: "hancock.mp4")
v9_photo = open("https://neatflix-seeds.s3.amazonaws.com/hancock.jpg")
v9.photo.attach(io: v9_photo, filename: 'hancock.jpg')

v10 = Video.create({title: "Your Lie in April",
  description: "Your Lie in April, known in Japan as Shigatsu wa Kimi no Uso or Kimiuso for short, is a Japanese manga series written and illustrated by Naoshi Arakawa. The series was serialized in Kodansha's Monthly Shōnen Magazine from April 2011 to May 2015.",
  genre_id: g4.id,
  video_type: "tv"
  })

v10_clip = open("https://neatflix-seeds.s3.amazonaws.com/yourlieinapril.mp4")
v10.clip.attach(io: v10_clip, filename: "yourlieinapril.mp4")
v10_photo = open("https://neatflix-seeds.s3.amazonaws.com/yourlieinapril.jpg")
v10.photo.attach(io: v10_photo, filename: 'yourlieinapril.jpg')

v11 = Video.create({title: "The Garden of Words",
  description: "When a lonely teenager skips his morning lessons to sit in a lovely garden, he meets a mysterious older woman who shares his feelings of alienation.",
  genre_id: g4.id,
  video_type: "movie"
  })

v11_clip = open("https://neatflix-seeds.s3.amazonaws.com/gardenofwords.mp4")
v11.clip.attach(io: v11_clip, filename: "gardenofwords.mp4")
v11_photo = open("https://neatflix-seeds.s3.amazonaws.com/gardenofwords.jpeg")
v11.photo.attach(io: v11_photo, filename: 'gardenofwords.jpeg')