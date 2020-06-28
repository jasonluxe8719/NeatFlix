# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Genre.destroy_all
Video.destroy_all
User.destroy_all

u1 = User.create({email: "demouser@neatflix.com", password: "123456"}) # demo user

g1 = Genre.create({name: "Action"})
g2 = Genre.create({name: "K-dramas"})
g3 = Genre.create({name: "Comedy"})
g4 = Genre.create({name: "Anime"})

v1 = Video.create({title: "The Bourne Supremacy", 
description: "Jason Bourne (Matt Damon) is living in India when he is framed by Russian agent Kirill (Karl Urban) for the theft of millions from the CIA. Kirill begins to pursue Bourne, intending to assassinate him -- but while Bourne and his girlfriend, Marie (Franka Potente), are on the run, a shot meant for him kills her instead. Vowing revenge, Bourne sets out to prove his innocence and bring the culprits to justice, but he has to evade CIA head Pamela Landry (Joan Allen), who is convinced he is guilty.",
genre_id: g1.id,
video_type: "movie"
})

v1_clip = open("https://neatflix-seeds.s3.amazonaws.com/BourneSupremacy.mp4")
v1.clip.attach(io: v1_clip, filename: 'BourneSupremacy.mp4')

v2 = Video.create({title: "Mission: Impossible - Fallout",
description: "Ethan Hunt and the IMF team join forces with CIA assassin August Walker to prevent a disaster of epic proportions. Arms dealer John Lark and a group of terrorists known as the Apostles plan to use three plutonium cores for a simultaneous nuclear attack on the Vatican, Jerusalem and Mecca, Saudi Arabia. When the weapons go missing, Ethan and his crew find themselves in a desperate race against time to prevent them from falling into the wrong hands.",
genre_id: g1.id,
video_type: "movie"
})

v2_clip = open("https://neatflix-seeds.s3.amazonaws.com/MissionImpossible.mp4")
v2.clip.attach(io: v2_clip, filename: 'MissionImpossible.mp4')


v3 = Video.create({title: "The Walking Dead",
  description: "Based on the comic book series written by Robert Kirkman, this gritty drama portrays life in the months and years that follow a zombie apocalypse. A group of survivors travel in search of safety and security, constantly on the move in search of a secure home.",
  genre_id: g1.id,
  video_type: "tv"
})

v3_clip = open("https://neatflix-seeds.s3.amazonaws.com/walkingdead.mp4")
v3.clip.attach(io: v3_clip, filename: 'wakingdead.mp4')

v4 = Video.create({title: "Outer Banks",
  description: "A teenager enlists his three best friends to hunt for a legendary treasure linked to his father's disappearance.",
  genre_id: g1.id,
  video_type: "tv"  
})

v4_clip = open("https://neatflix-seeds.s3.amazonaws.com/outerbanks.mp4")
v4.clip.attach(io: v4_clip, filename: 'outerbanks.mp4')

v5 = Video.create({title: "Kingdom",
  description: "While strange rumors about their ill king grips a kingdom, the crown prince becomes their only hope against a mysterious plague overtaking the land.",
  genre_id: g2.id,
  video_type: "tv"
})

v5_clip = open("https://neatflix-seeds.s3.amazonaws.com/Kingdom.mp4")
v5.clip.attach(io: v5_clip, filename: 'Kingdom.mp4')

v6 = Video.create({title: "Itaewon Class",
  description: "An ex-con and his friends fight to make their ambitious dreams for their street bar a reality.",
  genre_id: g2.id,
  video_type: "tv"
  })

v6_clip = open("https://neatflix-seeds.s3.amazonaws.com/itaewonclass.mp4")
v6.clip.attach(io: v6_clip, filename: 'itaewonclass.mp4')

v7 = Video.create({title: "The Office",
  description: "This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office).",
  genre_id: g3.id,
  video_type: "tv"
  })

v7_clip = open("https://neatflix-seeds.s3.amazonaws.com/theoffice.mp4")
v7.clip.attach(io: v7_clip, filename: "theoffice.mp4")

v8 = Video.create({title: "Friends",
  description: "Three young men and three young women -- of the BFF kind -- live in the same apartment complex and face life and love in New York. They're not above sticking their noses into one another's business and swapping romantic partners, which always leads to the kind of hilarity average people will never experience -- especially during breakups.",
  genre_id: g3.id,
  video_type: "tv"
  })

v8_clip = open("https://neatflix-seeds.s3.amazonaws.com/friends.mp4")
v8.clip.attach(io: v8_clip, filename: "friends.mp4")

v9 = Video.create({title: "The Disaster Artist",
  description: "An aspiring filmmaker Tommy Wiseau and actor Greg Sestero move to Los Angeles to look for Hollywood stardom. Using his own money, Wiseau writes, directs and stars in `The Room,' a critically maligned movie that becomes a cult classic.",
  genre_id: g3.id,
  video_type: "movie"
  })

v9_clip = open("https://neatflix-seeds.s3.amazonaws.com/thedisasterartist.mp4")
v9.clip.attach(io: v9_clip, filename: "thedisasterartist.mp4")

v10 = Video.create({title: "Naruto",
  description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks to gain recognition from his peers and also dreams of becoming the Hokage, the leader of his village.",
  genre_id: g4.id,
  video_type: "tv"
  })

v10_clip = open("https://neatflix-seeds.s3.amazonaws.com/naruto.mp4")
v10.clip.attach(io: v10_clip, filename: "naruto.mp4")

v11 = Video.create({title: "The Garden of Words",
  description: "When a lonely teenager skips his morning lessons to sit in a lovely garden, he meets a mysterious older woman who shares his feelings of alienation.",
  genre_id: g4.id,
  video_type: "movie"
  })

v11_clip = open("https://neatflix-seeds.s3.amazonaws.com/gardenofwords.mp4")
v11.clip.attach(io: v11_clip, filename: "gardenofwords.mp4")