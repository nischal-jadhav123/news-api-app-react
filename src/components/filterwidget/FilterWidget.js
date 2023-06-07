import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FilterListIcon from "@mui/icons-material/FilterList";

const FilterWidgetContainer = styled("div")(({ theme }) => ({
  width: "91%",
  height: 320,
  backgroundColor: "white",
  borderRadius: 8,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(2),
}));

const HeadingContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const HeadingText = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const FilterWidget = (props) => {
  const searchKey = props.searchKey;
  const handleSearchKeyChange = props.handleSearchKeyChange;
  const filterValue = props.filterValue;
  const handleFilterValue = props.handleFilterValue;
  const filterType = props.filterType;
  const handleFilterType = props.handleFilterType;
  const sortBy = props.sortBy;
  const handleSortBy = props.handleSortBy;
  const handleFilterSubmit = props.handleFilterSubmit;
  return (
    <FilterWidgetContainer>
      <HeadingContainer>
        <HeadingText variant="h6">Filter News</HeadingText>
        <FilterListIcon />
      </HeadingContainer>
      <TextField
        label="Search News"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2, width: "80%" }}
        value={searchKey}
        onChange={(e) => handleSearchKeyChange(e.target.value)}
      />
      <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
        <Typography>Last</Typography>
        <div style={{ display: "flex" }}>
          <TextField
            type="number"
            variant="outlined"
            size="small"
            sx={{ marginRight: 1 }}
            value={filterValue}
            onChange={(e) => handleFilterValue(e.target.value)}
          />
          <Select
            value={filterType}
            variant="outlined"
            size="small"
            onChange={(e) => handleFilterType(e.target.value)}
          >
            <MenuItem value="min">min</MenuItem>
            <MenuItem value="hours">hours</MenuItem>
            <MenuItem value="days">days</MenuItem>
            <MenuItem value="months">months</MenuItem>
            <MenuItem value="years">years</MenuItem>
          </Select>
        </div>
      </FormControl>
      <FormControl
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2, width: "80%" }}
      >
        <Typography>Sort By</Typography>
        <Select
          value={sortBy}
          variant="outlined"
          size="small"
          onChange={(e) => handleSortBy(e.target.value)}
        >
          <MenuItem value="relevancy">relevancy</MenuItem>
          <MenuItem value="popularity">popularity</MenuItem>
          <MenuItem value="publishedAt">publishedAt</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={(e) => {handleFilterSubmit()}}>
        Apply Filter
      </Button>
    </FilterWidgetContainer>
  );
};

export default FilterWidget;
