import Box from '../components/Box';
import Navigator from '../components/Navigator';

const App = (props) => <Box>
    <Box className="h-screen grid grid-flow-col grid-cols-4">
        <Box className="bg-gray-900">
            <Navigator />
        </Box>
        <Box className="col-span-3">{props.children}</Box>
    </Box>
</Box>

export default App;