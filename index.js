let url = "https://cute-jade-binturong-boot.cyclic.app/api";

let getflowers = async (search_flower) => {
  const response = await fetch(
    `${url}/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7`
  );

  let data = await response.json();

  let found_data = data.data.filter((value) => {
    return value.title.includes(search_flower);
  });

  if (found_data.length === 0) {
    console.log("No flowers found");
  } else {
    console.log(
      found_data.map(({ title, price, main_image, comments }) => ({
        title,
        price,
        main_image,
        comments,
      }))
    );
  }
};

getflowers("Cactus");