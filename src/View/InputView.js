const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../constants");


const InputView = {
  readName(callback) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', callback);
  }
};

module.exports = InputView;
