import { ServiceSchema } from "moleculer";
import ApiGwService from "moleculer-web";

const ApiGateWayService: ServiceSchema = {
  name: "ApiGateway",
  mixins: [ApiGwService],
  settings: {
    port: process.env.APIGATEWAY_PORT || 8000,
    routes: [
      {
        path: "/api",
        aliases: {
          "GET /helloWorld": "helloWorld.sayHello",
          "POST /sayHelloTo": "helloWorld.sayHelloTo",
          "GET /sayHelloTo/:name": "helloWorld.sayHelloTo",
          "GET /sayHelloWithPosts/:name": "helloWorld.sayHelloWithPosts",
          "POST /sayHelloWithPosts/": "helloWorld.sayHelloWithPosts",
          "GET /posts": "posts.getNumPosts",
          // QUOTES
          "GET /quotes/": "quotes.list",
          "GET /quotes/delete/:name": "quotes.delete",
          "GET /quotes/create/:name": "quotes.create",
          "GET /quotes/update/:name": "quotes.update"
        }
      }
    ],
    onError(req, res, err): void {
      if (err) {
        const { code, type } = err;
        this.logger.error(code, type);
      }
    }
  },
  async started(): Promise<void> {
    this.logger.info("ApiGateway started!");
  }
};

export = ApiGateWayService;
