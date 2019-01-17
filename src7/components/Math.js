function Math(props) {
  console.log(props);
  return eval(props.num1 + props.op + props.num2);
  //   console.log(temp);
  //   return "hi";
}

export default Math;
