export class BruzuRequest {
  static async getBruzu(text, textColor, bgColor, fontFamily, textAlign, fontSize){
    try {
      const response = await fetch(`https://img.bruzu.com/?a.text=${text}&a.color=${textColor}&backgroundColor=${bgColor}&a.fontFamily=${fontFamily}&a.textAlign=${textAlign}&a.fontSize=${fontSize}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    } catch(error) {
      return error.message;
    }
  }
}