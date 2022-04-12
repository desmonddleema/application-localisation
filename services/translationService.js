const translationDAO = require("../DAO/translationDAO");
const sequelize = require("../DAO/database");

exports.saveTranslation = async (
  labelId,
  languageId,
  translationValue,
  transaction
) => {
  try {
    const saveResult = await translationDAO.saveTranslation(
      { labelId, languageId, translationValue },
      transaction
    );
    return saveResult;
  } catch (err) {
    console.log(err);
    return { Success: false, Error: err.message };
  }
};

<<<<<<< HEAD
exports.updateTranslation = async (translationObj, transaction) => {
  try {
    const updateResult = await translationDAO.updateTranslation(
      translationObj.Translation_id,
      {
        Translation_value: translationObj.Translation_value,
        Status: translationObj.Status,
        Updated_time: new Date(),
      },
      transaction
    );
    return updateResult;
  } catch (err) {
    console.log(err);
    return { Success: false, Error: err.message };
  }
};
=======

exports.getTranslations = async()=> {
  try{
    let result = await translationDAO.getTranslations();
    console.log("--------------------------------> Result",result);
    return result;
  }catch(err){
    console.log(err);
    return {Success: false, Error: err.message};
  }
}

this.getTranslations();
>>>>>>> ad0f30507e357f11cedda00dfb715fc74f865e7a
