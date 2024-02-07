function mathRandom(timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Réussite");
        } else {
          reject(new Error("Échec"));
        }
      }, timeout);
    });
  }
  
  
  mathRandom(1000)
    .then((result) => {
      console.log("Succès :", result);
    })
    .catch((error) => {
      console.error("Erreur :", error.message);
    });
  