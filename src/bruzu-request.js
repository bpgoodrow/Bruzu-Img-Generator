export class BruzuRequest {
  static async getBruzu(text){
    try {
      const response = await fetch(`https://img.bruzu.com/?a.text=${text}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    } catch(error) {
      return error.message;
    }
  }
}