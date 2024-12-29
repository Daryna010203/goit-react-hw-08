import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import { Box } from '@mui/material';

import { styled } from '@mui/material/styles';

const CustomBox = styled(Box)({
  padding: '8px',
  maxWidth: '700px',
  margin: '0 auto',
});

const Layout = ({ children }) => {
  return (
    <>
      <CustomBox>
        <AppBar position="static" />
        <Suspense fallback={null}>{children}</Suspense>
      </CustomBox>
    </>
  );
};

export default Layout;
