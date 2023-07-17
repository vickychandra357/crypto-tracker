import  React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Box,createTheme,ThemeProvider} from "@mui/material"

export default function TabsComponent() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style={
    color:"var(--white)",
    width:"50vw",
    fontSize:"1.2rem",
    fontWeight:600,
    fontFamily:"Inter",
    textTransform:"capitalize",
  };

  const theme=createTheme({
    palette:{
        primary:{
            main:"#3a80e9"
        }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList onChange={handleChange}  variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style} />
          </TabList>
        <TabPanel value="grid">
            <div>mapping for grid</div>
        </TabPanel>
        <TabPanel value="list">
        <div>mapping for list</div>
        </TabPanel>
        
      </TabContext>
    </ThemeProvider>
  );
}