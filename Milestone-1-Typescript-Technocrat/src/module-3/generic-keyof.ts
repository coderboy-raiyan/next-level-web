type personInfo = {
  name: string;
  role: string;
  phone: number;
};

type keyOfPersonInfo = keyof personInfo;

function getValue(userData: personInfo, key: keyOfPersonInfo) {
  return userData[key];
}
