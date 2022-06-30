export class BruzuRequest {
  static async getBruzu(text, textColor, textBgColor, bgColor, fontFamily, textAlign, fontSize, image){
    try {
      const response = await fetch(`https://img.bruzu.com/?a.text=${text}&a.color=${textColor}&a.textBackgroundColor=${textBgColor}&backgroundColor=${bgColor}&a.fontFamily=${fontFamily}&a.textAlign=${textAlign}&a.fontSize=${fontSize}&backgroundImage=${image}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    } catch(error) {
      return error.message;
    }
  }
}