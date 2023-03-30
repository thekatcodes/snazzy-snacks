INSERT INTO users (email, password, first_name, last_name, street, city, province, country, postal_code, stripe_sub_id, subscribe) 
VALUES 
('example1@example.com', '$2a$10$qVu2GxLdZVQIjLvIjqQPMukdy344IC91DY/xkxHeCNG4241ao3O/2', 'Samma', 'Su', '1 Street', 'Toronto', 'ON', 'Canada', 'A1A A1A', 'sub_1MoxzrGdWagE6Ui8jq5fS3Oo', true),
('example2@example.com', '$2a$10$MR8lu1PZ68iwyi9XgTXQOewAMode11V2lNiMw84xsebub5yjoqaFa', 'Katie', 'Liu', '2 Street', 'Toronto', 'ON', 'Canada', 'B2B B2B', 'sub_1MoxzrGdWagE6Ui8jq5fS3Oo', true),
('example3@example.com', '$2a$10$qVu2GxLdZVQIjLvIjqQPMukdy344IC91DY/xkxHeCNG4241ao3O/2', 'Lyon', 'Lee', '3 Street', 'Toronto', 'ON', 'Canada', 'C3C C3C', 'sub_1MoxzrGdWagE6Ui8jq5fS3Oo', true);

INSERT INTO users (email, password, first_name, last_name)
VALUES
('jdoe@gmail.ca', '$2a$10$WkY8VpO7d5WlR79YCGHsjOOPdgC/ENka6wa/fYDjDV9zm7//YdjWG', 'John', 'Doe'),
('smith@live.ca', '$2a$10$WkY8VpO7d5WlR79YCGHsjOOPdgC/ENka6wa/fYDjDV9zm7//YdjWG', 'Sam', 'Smith');

INSERT INTO products (name, tier, type, img_url, description)
VALUES

('PRANA Granolove Cookies Brownie Crunch', 20, 'Cookie', 'https://dr9wvh6oz7mzp.cloudfront.net/i/2db351b41f418c7928eb644ae09fc7a9_ra,w380,h380_pa,w380,h380.png', 'Granolove brownie crunch cookies are a source of fiber and contains only 4g of sugar.'),
('Seattle Chocolate Sip Sip Horray Bar', 20, 'Chocolate', 'https://dr9wvh6oz7mzp.cloudfront.net/i/ae4873c3ef7b092c6e6fabce3c1b1b8b_ra,w380,h380_pa,w380,h380.jpg', 'Pink bubbly raspberry chocolate truffle bar with candies that pop!'),
('SmartSweets Cola Gummies Pouch', 20, 'Candy', 'https://dr9wvh6oz7mzp.cloudfront.net/i/27eb0ad74f34a45d527fc624e43c0b82_ra,w380,h380_pa,w380,h380.png', 'Delicious cola gummies with no sugar alcohols, artificial sweeteners and added sugar.'),
('Mallow Puffs Vanilla Bean & Dark Chocolate', 20, 'Candy', 'https://dr9wvh6oz7mzp.cloudfront.net/i/9f397b7ac780070ece1bcb260e20a4cf_ra,w380,h380_pa,w380,h380.png', 'Vegan Recipe, Vanilla Bean Mallows dunked in Belgian Dark Chocolate.'),
('Panda Natural Soft Licorice Bears', 20, 'Candy', 'https://dr9wvh6oz7mzp.cloudfront.net/i/59ebdfb2bc30b8c90139b0c4c1135019_ra,w380,h380_pa,w380,h380.jpg', 'Panda Soft Licorice Bears, the natural taste of licorice.'),
('Frankie''s Organic Clouds Jalapeno', 20, 'Chips', 'https://dr9wvh6oz7mzp.cloudfront.net/i/b960b839a2774d68fab0f10e6f0849bb_ra,w380,h380_pa,w380,h380.jpg', 'Deliciously baked snacks made with sprouted grains, providing a natural snack that has never even seen a deep-fryer.'),
('Sea Snax Chipotle Seaweed Snack', 20, 'Chips', 'https://dr9wvh6oz7mzp.cloudfront.net/i/f1dcd19a8d14fa317a9f3b03f758aef4_ra,w380,h380_pa,w380,h380.jpg', 'Strangely addictive organic roasted chipotle seaweed snack.'),
('Ritchies Milky Mints', 20, 'Candy', 'https://candybar.snackcrate.com/wp-content/uploads/2023/02/Irl_MilkyMints_482x482.png', 'Produced in Dublin for over 75 years, a firm favorite across the Emerald Isle.'),

('Kit Kat Big Little Pouch Original', 40, 'Chocolate', 'https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Big_482x482_082321.png', 'A classic in bite-size. The balanced taste of crispy wafers and milk chocolate.'),
('Darrell Lea Black Licorice', 40, 'Candy', 'https://dr9wvh6oz7mzp.cloudfront.net/i/b50ade294faedf2f91d0ba438dc9efb7_ra,w380,h380_pa,w380,h380.png', 'Soft Australian black licorice.'),
('MadeGood Snickerdoodle Cookies', 40, 'Cookie', 'https://dr9wvh6oz7mzp.cloudfront.net/i/533e2edddb0c8cb39509b5ad6c7d34b9_ra,w380,h380_pa,w380,h380.png', 'MadeGood Sweet Cinnamon Flavour Cookies made nut free and organic.'),
('Nosh & Co. Jump n Jive Jelly Beans', 40, 'Candy', 'https://dr9wvh6oz7mzp.cloudfront.net/i/02a7cf3c6355607437b9e60d9d10deb3_ra,w380,h380_pa,w380,h380.jpg', 'Jump n Jive Jelly Beans consist of the six fruit flavours and colours.'),
('Tayto Craft Cheese Chips', 40, 'Chips', 'https://candybar.snackcrate.com/wp-content/uploads/2023/02/Irl_TaytoCraft_482x482.png', 'Chips that are packed with an explosion of flavor.'),
('Tutti Gourmet Pistachio & Cranberry Biscotti', 40, 'Cookie', 'https://dr9wvh6oz7mzp.cloudfront.net/i/3bc08783bd4352d937e9309f23b96cf6_ra,w380,h380_pa,w380,h380.png', 'Handmade in small batches and toasted to perfection. This biscotti will stand up against any traditional biscotti.'),
('SmartSweets Fruity Gummy Bears Pouch', 40, 'Candy', 'https://dr9wvh6oz7mzp.cloudfront.net/i/65f547647c251d4519b6a6a460f1b0ef_ra,w380,h380_pa,w380,h380.jpg', 'Kick Sugar Keep Candy! These chewy gummy bears have four natural flavors per bag: raspberry, lemon, peach and apple.'),
('Sea Snax Chomperz Seaweed Chips', 40, 'Chips', 'https://dr9wvh6oz7mzp.cloudfront.net/i/b50589c772d88f8cf8accfea61bbc35e_ra,w380,h380_pa,w380,h380.jpg', 'Delicious seaweed curls wrapped in rice and lightly seasoned with a pinch of sea salt.'),
('Life Savers Hard Candy', 40, 'Candy', 'https://dr9wvh6oz7mzp.cloudfront.net/i/24bb1759798262e520c21bfb72c45246_ra,w380,h380_pa,w380,h380.jpg', 'A classic hard candy, featuring the famous Cherry, Pineapple, Orange, Lime and Lemon fruit flavours.'),
('Cadbury Crunchie Rocks', 40, 'Chocolate', 'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Cadbury_Crunchie_Rocks_482x482_.png', 'Clusters of crunchy golden honeycomb and crispy corn flakes, covered in Cadbury milk chocolate.'),

('Farm Bourgouin Sweet Potato', 60, 'Candy', 'https://northof49naturals.com/wp-content/uploads/2021/08/Sweet-Potato.png', 'Delicious organic free range sweet potato, harvested with love.'),
('Ojas Vegan Vanilla Quinoa Pops', 60, 'Chips', 'https://dr9wvh6oz7mzp.cloudfront.net/i/d09b90e92ca902a7db8fa06b794739d8_ra,w380,h380_pa,w380,h380.png', 'Light and airy vanilla flavoured quinoa pops.'),
('c''est BONBON Cocktail Mix', 60, 'Candy', 'https://dr9wvh6oz7mzp.cloudfront.net/i/d13772f2c8369b1cfa085a2a0a09cb5e_ra,w380,h380_pa,w380,h380.png', 'The cocktail mix gummies are fat free, gluten free and very soft.'),
('Dufflet Dark Chocolate & Sea Salt Blondie Thins', 60, 'Cookie', 'https://dr9wvh6oz7mzp.cloudfront.net/i/d77e468a097ca68699d2d7c69e4efe02_ra,w380,h380_pa,w380,h380.jpg', 'Crisp, sumptuous and intense dark chocolate and sea salt blondie thins.'),
('Vibe Crunchy Kale Himalaya Salt and Chickpea Miso', 60, 'Chips', 'https://dr9wvh6oz7mzp.cloudfront.net/i/732a1eb494760579518d880d1e065b7e_ra,w380,h380_pa,w380,h380.png', 'Crunchy kale that is air dried and not fried or baked.'),
('Kit Kat Big Little Pouch Strawberry', 60, 'Chocolate', 'https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Strawberry_Balls_482x482_082321.png', 'It''s bite-sized and easy to eat. The balanced taste of crispy wafers and milk chocolate with a hint of strawberry.'),
('SmartSweets Lollipops', 60, 'Candy', 'https://dr9wvh6oz7mzp.cloudfront.net/i/56573b2ba6fba0a855d87980b2daa1ef_ra,w380,h380_pa,w380,h380.png', 'Kick sugar, keep candy. Enjoy these lollipops with both blue raspberry and watermelon flavours.'),
('Hardbite Wild Onion & Yogurt', 60, 'Chips', 'https://candybar.snackcrate.com/wp-content/uploads/2023/01/Can_OnionYogurt_482x482.png', 'A tantalizing mix of wild onion and creamy yogurt seasonings, these chips pack a flavorful punch.'),
('Valeo Raspberry & Coconut Ruffles', 60, 'Chocolate', 'https://candybar.snackcrate.com/wp-content/uploads/2022/01/Valentines_RaspRuffles_482x482_.png', 'Delicious raspberry-flavored coconut fondant is covered with dark chocolate for a touch of decadence.'),
('Chimes Toasted Coconut Toffee with Sea Salt', 60, 'Candy', 'https://dr9wvh6oz7mzp.cloudfront.net/i/e8420599059c269e5de3fa356b1e467d_ra,w380,h380_pa,w380,h380.jpg', 'Delicious toasted coconut toffee made with real coconut milk and sea salt.'),
('Walkers Italian Lemon and White Chocolate Biscuits', 60, 'Cookie', 'https://dr9wvh6oz7mzp.cloudfront.net/i/7189bf3fd4f0894386dd12c8311986b3_ra,w380,h380_pa,w380,h380.jpg', 'Italian lemon and white chocolate biscuits.'),
('Whittaker''s Nelson Pear & Manuka Honey', 60, 'Chocolate', 'https://candybar.snackcrate.com/wp-content/uploads/2021/09/NZ_Manuka_Honey_482x482_.png', 'Milk chocolate with chewy pieces of Nelson grown pear, Mossop''s Manuka honey and a hint of caramel.'),
('Cookie It Up Gluten Free Chocolate Chip Cookies', 60, 'Cookie', 'https://dr9wvh6oz7mzp.cloudfront.net/i/bd22c4e947b554d58207fd33466be25e_ra,w380,h380_pa,w380,h380.png', 'Scrumtious, buttery and dotted gluten free cookies with silky milk chocolate chips.'),
('Nora Seaweed Snacks Spicy', 60, 'Chips', 'https://dr9wvh6oz7mzp.cloudfront.net/i/e69368a7ded33d00b8fd4ecdc8f68c95_ra,w380,h380_pa,w380,h380.png', 'Take a little trip with Nora down the crispy spicy road.'),
('Waterbridge English Mini Allsorts Liquorice', 60, 'Candy', 'https://dr9wvh6oz7mzp.cloudfront.net/i/60b501a97381ba4e598a63a5cee45407_ra,w380,h380_pa,w380,h380.png', 'Completely natural colours and flavours.');


INSERT INTO boxes (customer_id, subscription_tier, price)
VALUES
(1,'Tier 1', 20),
(2, 'Tier 1', 20),
(3, 'Tier 1', 20);


INSERT INTO selections (box_id, product_id)
VALUES
(1, 1),
(1, 3),
(1, 5),
(1, 7);

-- comment for testing purpose
