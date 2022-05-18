FROM ubuntu:focal

SHELL ["/bin/bash", "-c"]

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive
ENV TZ Europe/Berlin

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Add non root user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd -rm -d /home/$USERNAME -s /bin/bash -g root --uid $USER_UID --gid $USER_GID $USERNAME \
    && addgroup $USERNAME staff

# Create folders to mount extensions
RUN mkdir -p /home/$USERNAME/.vscode-server/extensions \
    /home/$USERNAME/.vscode-server-insiders/extensions \
    workspaces \
    && chown -R $USERNAME \
    /home/$USERNAME/.vscode-server \
    /home/$USERNAME/.vscode-server-insiders \
    workspaces

# Configure apt and install packages
RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    apt-utils \
    dialog \
    git \
    zsh \
    gnupg2 \
    ssh-client \
    procps \
    lsb-release \
    wget \
    apt-transport-https \
    ca-certificates \
    locales &&\
    locale-gen en_US.UTF-8 &&\
    export LC_ALL=en_US.UTF-8 &&\
    export LANG=en_US.UTF-8 &&\
    update-ca-certificates && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone &&\
    wget https://github.com/gohugoio/hugo/releases/download/v0.74.3/hugo_extended_0.74.3_Linux-64bit.deb &&\
    dpkg -i hugo_extended_0.74.3_Linux-64bit.deb &&\
    rm hugo_extended_0.74.3_Linux-64bit.deb &&\
    # Clean up
    apt-get autoremove -y &&\
    apt-get clean -y &&\
    rm -rf /var/lib/apt/lists/*

# Set the default shell to zsh rather than bash
RUN mkdir -p "$HOME/.zsh" &&\
    git clone https://github.com/sindresorhus/pure.git "$HOME/.zsh/pure"

COPY --chown=$USERNAME .misc/.zshrc /home/$USERNAME/vscode/.

# Switch to non-root user
USER $USERNAME

ENTRYPOINT [ "/bin/zsh" ]