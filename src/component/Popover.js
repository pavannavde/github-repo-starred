import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from './Card';

export default function ControlledAccordions({repo}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{width:'95vw', margin:'20px',alignSelf:'center',}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{fontSize:'56px',color:'tomato'}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{backgroundColor:'#1d1c1c',color:'#000', display:'flex',justifyContent:'flex-start'}}
        >
          <Typography sx={{ width: '100%'}}>
          <Card repo={repo}/>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Commit_activity , Addition/deletion/changes
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
  );
}