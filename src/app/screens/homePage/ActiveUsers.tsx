import React from "react";
import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { CssVarsProvider } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

const activeUsers = [
  {
    memberNick: "Martin",
    memberImage: "/img/martin%20(2).webp",
  },
  {
    memberNick: "Justin",
    memberImage: "/img/justin%20(2).webp",
  },
  {
    memberNick: "Rose",
    memberImage: "/img/rose%20(2).webp",
  },
  {
    memberNick: "Nusret",
    memberImage: "/img/nusret%20(2).webp",
  },
];

export default function ActiveUsers() {
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active Users</Box>

          <Stack className="cards-frame">
            <CssVarsProvider>
              {activeUsers.length > 0 ? (
                activeUsers.map((ele, index) => (
                  <Card key={index} className="card">
                    <CardCover>
                      <img src={ele.memberImage} alt={ele.memberNick} />
                    </CardCover>

                    <CardCover className="card-cover" />

                    <CardContent sx={{ justifyContent: "flex-end" }}>
                      <Typography level="h2" fontSize="lg" textColor="#fff">
                        {ele.memberNick}
                      </Typography>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Box className="no-data">No Active User</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
