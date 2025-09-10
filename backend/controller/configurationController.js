import MyConfig from '../models/MyConfig.js';


export const createConfig = async (req, res) => {
  try {
    const { configId, data } = req.body;

    const newConfig = new MyConfig({ configId, data });
    await newConfig.save();

    res.status(201).json({ message: "Config created", config: newConfig });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to create config" });
  }
};

export const getConfig = async (req, res) =>{
    try{
        const {id} = req.params;

        const config = await MyConfig.findOne({configId: id});

        if(!config){
            return res.status(404).json({error: "Configuration not found"});
        }

        res.json(config.data);
    }catch(err){
        console.error("Error fetching configuraton:", err);
        res.status(500).json({error: "Internal Server Error"});
    }
};

export const updateConfig = async (req, res) => {
  try {
    const { id } = req.params;
    const { remark } = req.body;

    const updated = await MyConfig.findOneAndUpdate(
      { configId: id },
      { remark: remark },
      { new: true }
    );

    if (!updated){
      return res.status(404).json({ error: "Configuration not found" });
    } 

    res.json({ message: "success" });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};