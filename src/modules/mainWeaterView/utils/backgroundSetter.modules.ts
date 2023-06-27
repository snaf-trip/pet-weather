import { backgroundImgRequest } from "../../../api/backgroundImgRequest.api";

export async function backgroundSetter(
  location: string,
) {
  let croppedLocation = location.split('/')[1];
  backgroundImgRequest(croppedLocation)
  // console.log(croppedLocation);
  // let promise: Promise<string> = new Promise(() => backgroundImgRequest(croppedLocation));
  // let imgUrl: string = await promise;
  // console.log(promise);
  // changeImgUrl(imgUrl);
}
