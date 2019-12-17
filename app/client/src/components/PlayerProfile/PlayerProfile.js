import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Table } from 'antd';


export default function PlayerProfileDialog(props) {
    console.log("props ", props);
  const [open, setOpen] = React.useState(props.visible);
  const [data, setData] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false)
  const { Column } = Table;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const playerName = "vardy";
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
      console.log('rerender')
    fetch(`http://localhost:8000/getPlayerDetails/${playerName}`)
        .then(res => res.json())
        .then(
        (result) => {
            setData(result);
            setIsLoaded(true);
            setOpen(true);
        },
                (error) => {
                    this.setState({
                        //isLoaded: false,
                        //error
                    });
                }
            )
  }, []);

  if(!isLoaded) {
    return (<div>Loading ...</div>)
  } else {
    return (
        console.log("props ", props),
        <React.Fragment>
            {console.log('Data === ', data)}
          {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open max-width dialog
          </Button> */}
          <Dialog
            fullWidth={true}
            maxWidth='md'
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
          >
            <div style={{ backgroundColor: '#513967' }}>
                <div className="popup-column" style={{ textAlign: 'left', paddingLeft: '40px'}} >
                    <span style={{color: 'white', fontSize: '30px'}}>Player Name</span><br/>
                    <span style={{color: 'white', fontSize: '20px'}}>Position</span><br/>
                    <span style={{color: 'white', fontSize: '20px'}}>Team Name</span>
                </div>
                <div className="popup-column">
                    <img src={require('../../../public/team-logos/' + data.picture)} 
                        style={{width: '120px', heigth: '120px'}}></img>
                </div>
            </div>
            <DialogContent style={{height: '300px'}}>
              <span style={{fontSize: '20px'}}>Total Points</span>
              {console.log("data.gameweek == ",data.gameweek)}
              <Table dataSource={data.gameweek} className="table" style={{ width: "80%" }}
                    onRowClick={(details) => this.playerPopup(details)}
                    pagination={false}>
    
                    <Column title="Name" dataIndex="gw" key="gw" />
                    <Column title="Opposition" dataIndex="opposition" key="opposition"
                        defaultSortOrder="descend" />
                    <Column title="Goals" dataIndex="goals" key="goals" />
                    <Column title="Points" dataIndex="points" key="points" />
                    <Column title="Assists" dataIndex="assists" key="assists" />
                    <Column title="Yellow Card" dataIndex="yellowCard" key="yellowCard" />
                    <Column title="Red Card" dataIndex="redCard" key="redCard" />
                </Table>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
  }
}