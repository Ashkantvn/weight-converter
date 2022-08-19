const index = (): void => {
  // elements
  const selectedUnit = <HTMLSelectElement>document.getElementById("type");
  const amount = <HTMLInputElement>document.getElementById("amount");
  const submitButton = <HTMLButtonElement>document.getElementById("submit");
  //   const units = <HTMLCollection>document.getElementsByClassName("unit");

  submitButton?.addEventListener("click", (event: MouseEvent): void => {
    event?.preventDefault();
    if (amount.value && selectedUnit.value) {
      console.log("hello");
    } else {
      alert("fill all inputs");
    }
  });
};

index();
