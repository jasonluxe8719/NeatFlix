# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Genre.delete_all
Video.delete_all

g1 = Genre.create({name: "Action"})
g2 = Genre.create({name: "Comedy"})
g3 = Genre.create({name: "Drama"})
g4 = Genre.create({name: "Romance"})
g5 = Genre.create({name: "K-drama"})
g6 = Genre.create({name: "Anime"})

v1 = Video.create({title: "The Bourne Supremacy", 
description: "Jason Bourne (Matt Damon) is living in India when he is framed by Russian agent Kirill (Karl Urban) for the theft of millions from the CIA. Kirill begins to pursue Bourne, intending to assassinate him -- but while Bourne and his girlfriend, Marie (Franka Potente), are on the run, a shot meant for him kills her instead. Vowing revenge, Bourne sets out to prove his innocence and bring the culprits to justice, but he has to evade CIA head Pamela Landry (Joan Allen), who is convinced he is guilty.",
genre_id: g1.id
})

v1.clip.attach(io: File.open('/Users/jasonpark/Desktop/fsp_videos/BourneSupremacy.mp4'),
filename: 'BourneSupremacy.mp4'
)

v2 = Video.create({title: "Kingdom",
description: "While strange rumors about their ill king grips a kingdom, the crown prince becomes their only hope against a mysterious plague overtaking the land.",
genre_id: g5.id
})

v2.clip.attach(io: File.open('/Users/jasonpark/Desktop/fsp_videos/Kingdom.mp4'),
  filename: 'Kingdom.mp4'
)
