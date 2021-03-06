import PropTypes from "prop-types";
// material
import { alpha, styled } from "@mui/material/styles";
import {
	Box,
	Link,
	Card,
	Grid,
	Avatar,
	Typography,
	CardContent,
	Icon,
} from "@mui/material";
// utils
//
import SvgIconStyle from "../../components/SvgIconStyle";
import { Message, Share, Visibility } from "@mui/icons-material";
// ----------------------------------------------------------------------

const CardMediaStyle = styled("div")({
	position: "relative",
	paddingTop: "calc(100% * 3 / 4)",
});

const TitleStyle = styled(Link)({
	fontSize: "15px",
	// paddingBottom: "1px",
	height: 54,
	overflow: "hidden",
	WebkitLineClamp: 2,
	display: "-webkit-box",
	WebkitBoxOrient: "vertical",
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
	zIndex: 9,
	width: 32,
	height: 32,
	position: "absolute",
	left: theme.spacing(3),
	bottom: theme.spacing(-2),
}));

const InfoStyle = styled("div")(({ theme }) => ({
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "flex-end",
	marginTop: theme.spacing(2),
	color: theme.palette.text.disabled,
}));

const CoverImgStyle = styled("img")({
	top: 0,
	width: "100%",
	height: "100%",
	objectFit: "cover",
	position: "absolute",
});

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
	post: PropTypes.object.isRequired,
	index: PropTypes.number,
	onClick: PropTypes.func,
};

export default function BlogPostCard({ post, index, onClick }) {
	const { cover, name, view, comment, share, author, createdAt } = post;
	const latestPostLarge = index === 0;
	const latestPost = index === 1 || index === 2;

	const POST_INFO = [
		{ number: comment, icon: <Message /> },
		{ number: view, icon: <Visibility /> },
		{ number: share, icon: <Share /> },
	];

	return (
		<Grid
			onClick={onClick}
			item
			xs={12}
			sm={latestPostLarge ? 12 : 6}
			md={latestPostLarge ? 6 : 3}
		>
			<Card sx={{ position: "relative" }}>
				<CardMediaStyle
					sx={{
						...((latestPostLarge || latestPost) && {
							pt: "calc(100% * 4 / 3)",
							"&:after": {
								top: 0,
								content: "''",
								width: "100%",
								height: "100%",
								position: "absolute",
								bgcolor: (theme) =>
									alpha(theme.palette.grey[900], 0.72),
							},
						}),
						...(latestPostLarge && {
							pt: {
								xs: "calc(100% * 4 / 3)",
								sm: "calc(100% * 3 / 4.66)",
							},
						}),
					}}
				>
					<SvgIconStyle
						color="paper"
						src="/static/icons/shape-avatar.svg"
						sx={{
							width: 80,
							height: 36,
							zIndex: 9,
							bottom: -15,
							position: "absolute",
							color: "background.paper",
							...((latestPostLarge || latestPost) && {
								display: "none",
							}),
						}}
					/>
					<AvatarStyle
						alt={post.organiser}
						src={`/static/mock-images/avatars/avatar_${
							index + 1
						}.jpg`}
						sx={{
							...((latestPostLarge || latestPost) && {
								zIndex: 9,
								top: 24,
								left: 24,
								width: 40,
								height: 40,
							}),
						}}
					/>

					<CoverImgStyle
						alt={name}
						src={`/static/mock-images/covers/cover_${
							index + 1
						}.jpg`}
					/>
				</CardMediaStyle>

				<CardContent
					sx={{
						pt: 4,
						...((latestPostLarge || latestPost) && {
							bottom: 0,
							width: "100%",
							position: "absolute",
						}),
					}}
				>
					<Typography
						gutterBottom
						variant="caption"
						sx={{ color: "text.disabled", display: "block" }}
					>
						{createdAt}
					</Typography>

					<TitleStyle
						to="#"
						color="inherit"
						variant="subtitle2"
						underline="hover"
						sx={{
							...(latestPostLarge && {
								typography: "h5",
								height: 60,
							}),
							...((latestPostLarge || latestPost) && {
								color: "common.white",
							}),
						}}
					>
						{name}
					</TitleStyle>

					{/* <InfoStyle>
          {POST_INFO.map((info, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                ml: index === 0 ? 0 : 1.5,
                ...((latestPostLarge || latestPost) && {
                  color: "grey.500",
                }),
              }}
            >
              {info.icon}
              <Box width={"5px"} />
              <Typography variant="caption">6969</Typography>
            </Box>
          ))}
        </InfoStyle> */}
				</CardContent>
			</Card>
		</Grid>
	);
}
