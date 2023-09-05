import { Link } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function App() {
	return (
        <div>
            <Stack spacing={1} direction="row" j
                justifyContent="right">
                <Link href="#" underline="hover">
                    About</Link>
                <Link href="#" underline="none">
                    Project</Link>
                <Link href="#" underline="none">
                    Experience</Link>
            </Stack>
        </div>
	);
}

export default App;
