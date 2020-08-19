import { ServiceSchema, Context } from "moleculer";

const quotes: ServiceSchema = {
  name: "quotes",
  actions: {
    list(): string {
      return "AHHHHHHHHHHHHHHH!";
    },

    delete(ctx: Context): string {
      const { name } = ctx.params;
      return `Borrando ${name}!`;
    },

    update(ctx: Context): string {
      const { name } = ctx.params;
      return `Borrando ${name}!`;
    },

    create(ctx: Context): string {
      const { name } = ctx.params;
      return `Borrando ${name}!`;
    },
    async started(): Promise<void> {
      this.logger.info("QUOTES microservice started!");
    }
  }
};

export = quotes;
