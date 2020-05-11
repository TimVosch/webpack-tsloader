export class Application {
  private message = "Hello world";

  start() {
    console.log(this.message);
  }
}

const app = new Application();
app.start();
