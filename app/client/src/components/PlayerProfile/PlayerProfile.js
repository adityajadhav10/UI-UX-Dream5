import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Table } from 'antd';


export default function PlayerProfileDialog(props) {

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});
  const [isLoaded, setIsLoaded] = React.useState(false)
  const { Column } = Table;
  const playerName = props.playerName;
  const handleClose = () => {
    setOpen(false);
    props.closePopup();
  };

  React.useEffect(() => {
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
            isLoaded: false,
          });
        }
      );
    return () => {
      // console.log('component unmounting');
    }
  }, []);

  function capitalizeFirstLetter() {
    return playerName.toString().charAt(0).toUpperCase() + playerName.toString().slice(1);
  }

  if (!isLoaded) {
    return (<div>Loading ...</div>)
  } else {
    return (
      <React.Fragment>
        <Dialog
          fullWidth={true}
          maxWidth='md'
          open={open}
          onClose={handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <div style={{ backgroundColor: '#513967' }}>
            <div className="popup-column" style={{ textAlign: 'left', paddingLeft: '40px' }} >
              <span style={{ color: 'white', fontSize: '30px' }}>{capitalizeFirstLetter()}</span><br />
              <span style={{ color: 'white', fontSize: '20px' }}>{data.position}</span><br />
              <span style={{ color: 'white', fontSize: '20px' }}>{data.team}</span>
            </div>
            <div className="popup-column">
              <img src={require('../../../public/team-logos/' + data.picture)}
                style={{ width: '120px', heigth: '120px' }}></img>
            </div>
          </div>
          <DialogContent style={{ height: '300px' }}>
            <span style={{ fontSize: '20px' }}>Total Points</span>
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
