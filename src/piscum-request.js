export class PicsumRequest {
  static async getPicsum(){
    try {
      const response = await fetch(`https://picsum.photos/600`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    } catch(error) {
      return error.message;
    }
  }
}