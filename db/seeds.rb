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
g2 = Genre.create({name: "Korean"})
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
v11_photo = open("https://neatflix-seeds.s3.amazonaws.com/gardenofwords.jpg")
v11.photo.attach(io: v11_photo, filename: 'gardenofwords.jpg')

v12 = Video.create({title: "Parasite",
  description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
  genre_id: g2.id,
  video_type: "movie"
  })

v12_clip = open("https://neatflix-seeds.s3.amazonaws.com/parasite.mp4")
v12.clip.attach(io: v12_clip, filename: "parasite.mp4")
v12_photo = open("https://neatflix-seeds.s3.amazonaws.com/parasite.jpg")
v12.photo.attach(io: v12_photo, filename: "parasite.jpg")

v13 = Video.create({title: "The Fast and the Furious: Tokyo Drift",
  description: "Sean Boswell (Lucas Black) always feels like an outsider, but he defines himself through his victories as a street racer. His hobby makes him unpopular with the authorities, so he goes to live with his father in Japan. Once there and even more alienated, he learns about an exciting, but dangerous, new style of the sport. The stakes are high when Sean takes on the local champion and falls for the man's girlfriend.",
  genre_id: g1.id,
  video_type: "movie"
  })

v13_clip = open("https://neatflix-seeds.s3.amazonaws.com/tokyodrift.mp4")
v13.clip.attach(io: v13_clip, filename: "tokyodrift.mp4")
v13_photo = open("https://neatflix-seeds.s3.amazonaws.com/tokyodrift.jpg")
v13.photo.attach(io: v13_photo, filename: "tokyodrift.jpg")

v14 = Video.create({title: "Snowpiercer",
  description: "Survivors of Earth's second Ice Age live out their days on a luxury train that ploughs through snow and ice. The train's poorest residents, who live in the squalid caboose, plan to improve their lot by taking over the engine room.",
  genre_id: g2.id,
  video_type: "movie"
  })

v14_clip = open("https://neatflix-seeds.s3.amazonaws.com/snowpiercer.mp4")
v14.clip.attach(io: v14_clip, filename: "snowpiercer.mp4")
v14_photo = open("https://neatflix-seeds.s3.amazonaws.com/snowpiercer.jpg")
v14.photo.attach(io: v14_photo, filename: "snowpiercer.jpg")

v15 = Video.create({title: "Train to Busan",
  description: "A man (Gong Yoo), his estranged daughter and other passengers become trapped on a speeding train during a zombie outbreak in South Korea.",
  genre_id: g2.id,
  video_type: "movie"
  })

v15_clip = open("https://neatflix-seeds.s3.amazonaws.com/busan.mp4")
v15.clip.attach(io: v15_clip, filename: "busan.mp4")
v15_photo = open("https://neatflix-seeds.s3.amazonaws.com/busan.jpg")
v15.photo.attach(io: v15_photo, filename: "busan.jpg")

v16 = Video.create({title: "The Hangover Part III",
  description: "It's been two years since the gang known as the Wolfpack narrowly escaped disaster in Bangkok. Now, Phil (Bradley Cooper), Stu (Ed Helms) and Doug (Justin Bartha) have happy lives at home -- but Alan (Zach Galifianakis) doesn't.",
  genre_id: g3.id,
  video_type: "movie"
  })

v16_clip = open("https://neatflix-seeds.s3.amazonaws.com/hangover.mp4")
v16.clip.attach(io: v16_clip, filename:"hangover.mp4")
v16_photo = open("https://neatflix-seeds.s3.amazonaws.com/hangover.jpg")
v16.photo.attach(io: v16_photo, filename: "hangover.jpg")

v17 = Video.create({title: "The Other Guys",
  description: "Unlike their heroic counterparts on the force, desk-bound NYPD detectives Gamble (Will Ferrell) and Hoitz (Mark Wahlberg) garner no headlines as they work day to day.",
  genre_id: g3.id,
  video_type: "movie"
  })

v17_clip = open("https://neatflix-seeds.s3.amazonaws.com/otherguys.mp4")
v17.clip.attach(io: v17_clip, filename: "otherguys.mp4")
v17_photo = open("https://neatflix-seeds.s3.amazonaws.com/otherguys.jpeg")
v17.photo.attach(io: v17_photo, filename: "otherguys.jpeg")

v18 = Video.create({title: "Haikyu",
  description: "Haikyu!! is a Japanese shōnen manga series written and illustrated by Haruichi Furudate. The story follows Shōyō Hinata, a boy determined to become a great volleyball player despite his small stature.",
  genre_id: g4.id,
  video_type: "tv"
  })

v18_clip = open("https://neatflix-seeds.s3.amazonaws.com/haikyu.mp4")
v18.clip.attach(io: v18_clip, filename: "haikyu.mp4")
v18_photo = open("https://neatflix-seeds.s3.amazonaws.com/haikyu.jpg")
v18.photo.attach(io: v18_photo, filename: "haikyu.jpg")

v19 = Video.create({title: "A Silent Voice",
  description: "When a grade school student with impaired hearing is bullied mercilessly, she transfers to another school. Years later, one of her former tormentors sets out to make amends.",
  genre_id: g4.id,
  video_type: "movie"
  })

v19_clip = open("https://neatflix-seeds.s3.amazonaws.com/silentvoice.mp4")
v19.clip.attach(io: v19_clip, filename: "silentvoice.mp4")
v19_photo = open("https://neatflix-seeds.s3.amazonaws.com/silentvoice.jpg")
v19.photo.attach(io: v19_photo, filename: "silentvoice.")

v20 = Video.create({title: "Ni No Kuni",
  description: "Ni no Kuni is a series of role-playing video games published by Bandai Namco worldwide and developed and published by Level-5 in Japan. The first games in the series chiefly follow the young Oliver, and his journey to another world to save his mother and stop the beckoning evil.",
  genre_id: g4.id,
  video_type: "movie"
  })

v20_clip = open("https://neatflix-seeds.s3.amazonaws.com/ninokuni.mp4")
v20.clip.attach(io: v20_clip, filename: "ninokuni.mp4")
v20_photo = open("https://neatflix-seeds.s3.amazonaws.com/ninokuni.jpg")
v20.photo.attach(io: v20_photo, filename: "ninokuni.jpg")
