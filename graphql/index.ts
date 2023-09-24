export const getUserQuery = `
query GetUser($email: String!) {
    user(by: {email: $email}) {
      name
      email
      avatarUrl
      description
      githubUrl
      linkedInUrl
      id
    }
  }
`;

export const createUserMutation = `
mutation CreateUser($input: UserCreateInput!) {
  userCreate(input: $input) {
    user {
      name
      email
      avatarUrl
      description
      githubUrl
      linkedInUrl
      id
    }
  }
}
`;

export const createProjectMutation = `
mutation ProjectCreate(
  $input: ProjectCreateInput!
) {
  projectCreate(input: $input) {
    project {
      title
      description
      image
      liveSiteUrl
      githubUrl
      category
      createdBy {
        email
        name
      }
      id
    }
  }
}
`;

export const projectsQuery = `
query ProjectCollection {
  projectCollection(first: 10) {
    edges {
      node {
        title
        description
        image
        liveSiteUrl
        githubUrl
        category
        id
        createdBy {
          email
          name
          id
          avatarUrl
        }
        updatedAt
        createdAt
      }
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
  }
}`;

export const getProjectByIdQuery = `
query Project($id: ID!) {
  project(by: {
    id: $id
  }) {
    id
    category
    githubUrl
    liveSiteUrl
    image
    description
    title
    createdBy {
      name
      email
      avatarUrl
      description
      githubUrl
      linkedInUrl
      id
    }
  }
}`;

export const getProjectByUserIdQuery = `
query getUserProjects($userId: ID!, $last: Int = 4) {
  user(by: { id: $userId }) {
    id
    name
    email
    description
    avatarUrl
    githubUrl
    linkedInUrl
    projects(last: $last) {
      edges {
        node {
          id
          title
          image
        }
      }
    }
  }
}
`;
