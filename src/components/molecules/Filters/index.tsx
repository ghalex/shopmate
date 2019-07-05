import * as React from "react";
import cx from "classnames";
import useStyles from "./styles";
import { Typography, Button } from "@material-ui/core";
import { Department, Category } from "models";
import { Filter } from "types";

interface Props {
  className?: string;
  departments?: Department[];
  categories?: Category[];
  filter: Filter;
  onChangeFilter: (filter: Filter) => void;
}

const FiltersCompenent = ({
  filter,
  departments = [],
  categories = [],
  onChangeFilter,
  ...rest
}: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, rest.className);

  const filterCategory = (category: Category) => {
    return filter.departmentId > -1 && category.departmentId === filter.departmentId;
  };

  return (
    <div {...rest} className={className}>
      <header className={classes.header}>
        <Typography variant="h3">Filter 15 items</Typography>
      </header>
      <div className={classes.content}>
        <div>
          <Typography variant="h3" gutterBottom={true}>
            Departments
          </Typography>
          {departments.length > 0 ? (
            <>
              <Button
                size="small"
                color={filter.departmentId === -1 ? "primary" : "default"}
                variant="contained"
                onClick={() => onChangeFilter({ ...filter, departmentId: -1, categoryId: -1 })}>
                All
              </Button>
              {departments.map((d, idx) => {
                return (
                  <Button
                    key={idx}
                    color={filter.departmentId === d.id ? "primary" : "default"}
                    size="small"
                    variant="contained"
                    onClick={() =>
                      onChangeFilter({ ...filter, departmentId: d.id, categoryId: -1 })
                    }>
                    {d.name}
                  </Button>
                );
              })}
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        {filter.departmentId > -1 && (
          <div>
            <Typography variant="h3">Categories</Typography>
            <Button
              size="small"
              color={filter.categoryId === -1 ? "primary" : "default"}
              variant="contained"
              onClick={() => onChangeFilter({ ...filter, categoryId: -1 })}>
              All
            </Button>
            {categories.filter(filterCategory).map((c, idx) => {
              return (
                <Button
                  key={idx}
                  size="small"
                  variant="contained"
                  color={filter.categoryId === c.id ? "primary" : "default"}
                  onClick={() => onChangeFilter({ ...filter, categoryId: c.id })}>
                  {c.name}
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FiltersCompenent;
