import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';

const FAButton = () => {
    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;

    return (
        <Provider>
            <Portal>
                <FAB.Group
                    open={open}
                    icon={open ? 'heart' : 'plus'}
                    actions={[
                        {
                            icon: 'plus',
                            label: 'Join with us',
                            onPress: () => console.log('Pressed email'),
                            small:false,
                        },
                        {
                            icon: 'phone',
                            label: 'Contact Us',
                            onPress: () => console.log('Pressed Contact us'),
                            small: false,
                        },
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }}
                />
            </Portal>
        </Provider>
    );
};

export default FAButton;
