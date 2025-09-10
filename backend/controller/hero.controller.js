import Hero from "../model/hero.model.js";

export const createHero = async (req, res) => {
  try {
    const hero = new Hero(req.body);
    await hero.save();
    res.status(201).json(hero);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getHero = async (req, res) => {
  try {
    const hero = await Hero.findOne();
    res.status(200).json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateHero = async (req, res) => {
  try {
    const hero = await Hero.findOneAndUpdate({}, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(hero);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
