export default defineEventHandler(async (event) => {
  // $fetch - server - specific

  const { pokemon } = event.context.params;
  try {
    const response = await $fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    const idealResponse = {
      id: response.id,
      name: response.name,
      sprite: response.sprites.front_default,
    };

    return idealResponse;
  } catch (err) {
    throw createError({
      statusCode: 404,
      message: "Can't find that Pokemon! Sowy!",
    });
  }
});
