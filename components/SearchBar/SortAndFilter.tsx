import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { FilterList, Sort } from "@material-ui/icons";
import React from "react";
import { Recipe } from "../../context/types";

type OptionalRecipe = {
  [P in keyof Recipe]?: any;
};

const recipeSchema: OptionalRecipe = {
  totalTime: 0,
  calories: 0,
  yield: 0,
  label: 0,
  source: 0,
};

interface Props {}

const SortAndFilter = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleSortClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton>
        <FilterList />
      </IconButton>
      <IconButton onClick={handleSortClick}>
        <Sort />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.keys(recipeSchema).map((r) => (
          <MenuItem>{r}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SortAndFilter;
