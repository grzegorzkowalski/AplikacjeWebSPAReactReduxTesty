const SecretStuff = ({password, correctPassword, secret}) => {
    if (password === correctPassword) {
        return (
            <h1>
                {secret}
            </h1>
        );
    } else {
        return null;
    }

};

export default SecretStuff;
