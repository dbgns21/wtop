import { React, useState } from 'react';
import './LoginComponent.css';
import { alpha, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { grey } from '@mui/material/colors';

const RedditTextField = styled((props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    border: '1px solid #ffffff',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
    ]),
    '&:hover': {
      borderWidth: 2,
      backgroundColor: 'white',
    },
    '&.Mui-focused': {
      backgroundColor: 'white',
      boxShadow: `${alpha(grey[900], 0.25)} 0 0 0 2px`,
      borderColor: grey[900],
    },
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[900]),
  backgroundColor: grey[800],
  '&:hover': {
    backgroundColor: grey[600],
  },
}));

function LoginComponent() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const onChangeId = (e) => setId(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const onClick = () => {
    setId(id);
    setPassword(password);
    console.log(`${id},${password}`);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div id="login">
      <h1 className="project-first-name">W</h1>
      <h1 className="project-name">TOP</h1>
      <p className="sub-name">네트워크통합관제솔루션</p>
      <br />
      <RedditTextField
        label="사번"
        value={id}
        variant="filled"
        size="small"
        margin="dense"
        onChange={onChangeId}
        fullWidth
      />
      <br />
      <RedditTextField
        label="비밀번호"
        type="password"
        value={password}
        variant="filled"
        size="small"
        margin="dense"
        onChange={onChangePassword}
        onKeyPress={onKeyPress}
        fullWidth
      />
      <br />
      <br />
      <ColorButton onClick={onClick} variant="contained" fullWidth>로그인</ColorButton>
      <br />
      <p className="team-name">KT 네트워크AI개발팀</p>
    </div>
  );
}

export default LoginComponent;
