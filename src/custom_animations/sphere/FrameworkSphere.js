import TagCloud from './TagCloud';
import CppLogo from '../../images/logos/cpp-logo.png';
import JavaLogo from '../../images/logos/java-logo.png';
import MySqlLogo from '../../images/logos/mysql-logo.png';
import PythonLogo from '../../images/logos/python-logo.png';
import CSharpLogo from '../../images/logos/c-sharp-logo.png';
import GitLogo from '../../images/logos/git-logo.png';
import DockerLogo from '../../images/logos/docker-logo.png';
import RustLogo from '../../images/logos/rust-logo.png';
import GoLogo from '../../images/logos/Go-Logo_Aqua2.png';
import LinuxLogo from '../../images/logos/linux-tux-logo.png';
import LeetCodeLogo from '../../images/logos/LeetCode_logo_black.png';
import AndroidLogo from '../../images/logos/android-logo.png';
import CLogo from '../../images/logos/c-logo.png';
import ArchLogo from '../../images/logos/arch-logo.png';
import CMakeLogo from '../../images/logos/cmake-logo.png';

const Texts = [
  { url: CppLogo, alt: 'Cpp' },
  { url: JavaLogo, alt: 'Java' },
  { url: MySqlLogo, alt: 'MySql' },
  { url: PythonLogo, alt: 'Python' },
  { url: CSharpLogo, alt: 'C#' },
  { url: GitLogo, alt: 'Git' },
  { url: DockerLogo, alt: 'Docker' },
  { url: RustLogo, alt: 'Rust' },
  { url: GoLogo, alt: 'Go' },
  { url: LinuxLogo, alt: 'Linux' },
  { url: LeetCodeLogo, alt: 'LeetCode' },
  { url: AndroidLogo, alt: 'Android' },
  { url: CLogo, alt: 'C' },
  { url: ArchLogo, alt: 'Arch Linux' },
  { url: CMakeLogo, alt: 'CMake' },
];

export default function initializeFrameworkSphere(isMobile) {
  let radius = 300;
  if (isMobile) radius = 150;
  if (isMobile && window.innerWidth >= 1200) radius = 250;
  TagCloud('.Sphere', Texts, {
    radius,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    direction: 135,
    keep: true,
  });

  // Wrap this line in a DOMContentLoaded event listener
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.Sphere').style.color = '#FF5733';
  });
}
