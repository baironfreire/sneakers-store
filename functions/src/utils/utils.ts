//@ts-ignore
export class Utils {

  static isEmpty(value: any) {
    if (value === undefined || value === null || value === "") {
      return true;
    }
    if (Array.isArray(value) === true) {
      return value.length === 0;
    }
    if ((typeof value === 'object') && Object.keys(value).length === 0) {
      return true;
    }
    return false;
  }

}
