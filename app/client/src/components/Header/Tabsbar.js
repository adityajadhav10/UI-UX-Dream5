// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`scrollable-prevent-tabpanel-${index}`}
//       aria-labelledby={`scrollable-prevent-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box p={3}>{children}</Box>}
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired
// };

// const theme = createMuiTheme({
//   overrides: {
//     MuiTabs: {
//       indicator: {
//         backgroundColor: "#513967"
//       }
//     }
//   }
// });
// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     borderBottom: "1px solid #e8e8e8"
//   }
// });

// export default function ScrollableTabsButtonPrevent() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <MuiThemeProvider theme={theme}>
//       <div>
//       <div className={classes.root}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           style={{ color: "#513967" }}
//           centered
//         >
//           <Tab label="Overview" />
//           <Tab label="Statistics" />
//           <Tab label="View Team" />
//           <Tab label="Fixtures" />
//           <Tab label="Fanstore" />
//         </Tabs>
//         </div>
//         <TabPanel value={value} index={0}>
//           Overview page
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//           Statistics Page
//         </TabPanel>
//         <TabPanel value={value} index={2}>
//           View Team Page
//         </TabPanel>
//         <TabPanel value={value} index={3}>
//           Fixtures Page
//         </TabPanel>
//         <TabPanel value={value} index={4}>
//           Fanstore Page
//         </TabPanel>
//       </div>
//     </MuiThemeProvider>
//   );
// }
