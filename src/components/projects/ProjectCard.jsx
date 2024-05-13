import React, { useContext } from "react";
import { Button, Badge, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import ReactMarkdown from "react-markdown";

const styles = {
  badgeStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
  },
  cardTitleStyle: {
    fontSize: 24,
    fontWeight: 700,
  },
  cardTextStyle: {
    textAlign: "left",
  },
  linkStyle: {
    textDecoration: "none",
    padding: 10,
  },
  buttonStyle: {
    margin: 5,
  },
};

const ProjectCard = (props) => {
  const theme = useContext(ThemeContext);

  const { project } = props;

  return (
    <div>
      <Card
        style={{
          borderRadius: 10,
          backgroundColor: theme.cardBackground,
          borderColor: theme.cardBorderColor,
          borderWidth: 3,
          width: 350,
          marginLeft: 100,
          marginRight: 100,
          marginBottom: 50,
        }}
        text={theme.bsSecondaryVariant}
      >
        {project?.image && (
          <Card.Img
            variant="top"
            src={project?.image}
            style={{ height: 200 }}
          />
        )}
        <Card.Body>
          <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
          <Card.Text style={styles.cardTextStyle} as="div">
            <ReactMarkdown>{project.bodyText}</ReactMarkdown>
          </Card.Text>
        </Card.Body>

        <Card.Body>
          {project?.links?.map((link) => (
            <Button
              key={link.href}
              style={styles.buttonStyle}
              variant={"outline-" + theme.bsSecondaryVariant}
              onClick={() => window.open(link.href, "_blank")}
            >
              {link.text}
            </Button>
          ))}
        </Card.Body>
        {project.tags && (
          <Card.Footer style={{ backgroundColor: theme.cardFooterBackground }}>
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                pill
                bg={theme.bsSecondaryVariant}
                text={theme.bsPrimaryVariant}
                style={styles.badgeStyle}
              >
                {tag}
              </Badge>
            ))}
          </Card.Footer>
        )}
      </Card>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    image: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
