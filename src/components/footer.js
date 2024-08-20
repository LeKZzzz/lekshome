import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const StyledSecond = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }
    a:hover{
    cursor:default;
    }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  const [githubInfo2, setGitHubInfo2] = useState({
    stars: 0,
    forks: 0,
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        await Promise.all([
          fetch('https://api.github.com/repos/bchiang7/v4')
            .then(response => response.json())
            .then(data => {
              setGitHubInfo({
                stars: data.stargazers_count,
                forks: data.forks_count,
              });
            }),
          fetch('https://api.github.com/repos/LeKZzzz/lekshome')
          .then(response => response.json())
          .then(data => {
            setGitHubInfo2({
              stars: data.stargazers_count,
              forks: data.forks_count,
            });
          })
        ]);
      } catch (e) {
        console.error('获取 GitHub 仓库信息时出错:', e);
      }
    };
    fetchGitHubData();
    // buusanzi
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
    document.head.appendChild(script);
  }, []);


  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabindex="-1">
        <a href="https://github.com/bchiang7/v4">
          <div>Built by Brittany Chiang |</div>

          {githubInfo.stars && githubInfo.forks && (
            <div className="github-stats">
              <span>
                <Icon name="Star" />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <Icon name="Fork" />
                <span>{githubInfo.forks.toLocaleString()}</span>
              </span>
            </div>
          )}
        </a>

        <a href="https://github.com/LeKZzzz/lekshome">
          <div>| Customized by LeK</div>

          {githubInfo.stars && githubInfo.forks && (
            <div className="github-stats">
              <span>
                <Icon name="Star" />
                <span>{githubInfo2.stars.toLocaleString()}</span>
              </span>
              <span>
                <Icon name="Fork" />
                <span>{githubInfo2.forks.toLocaleString()}</span>
              </span>
            </div>
          )}
        </a>
      </StyledCredit>
      <StyledSecond tabindex="-1">
        <a>
          <div>
            Last update on 2024/08/18 |
          </div>
        </a>
        <a>
          <div>
            | Total visits <span id="busuanzi_value_site_pv"></span> times
          </div>
        </a>

      </StyledSecond>
      <StyledCredit tabindex="-1">
        <div align="center"><a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2022018241号</a></div>
      </StyledCredit>
    </StyledFooter>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
