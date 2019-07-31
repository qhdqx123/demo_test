var tools = {
    add: (...numbers) => {
      let sum = 0;
      for (let number in numbers) {
        sum += numbers[number];
      }
      return sum;
    }
  }
  
//   https://juejin.im/post/597ec55a51882556a234fcef

  // exports 使用方法
// var str = "jsliang is very good!";
// exports.str = str; // { str: 'jsliang is very good!' }

// module.exports 使用方法
module.exports = tools;
