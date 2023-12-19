import Project from './Project';
import ArchLogo from '../../images/logos/arch-logo.png';
import Cpp from '../../images/logos/cpp-logo.png';
import UnrealEngine from '../../images/logos/unreal-engine-logo.png';

export const projects = [
  new Project(
    'FirstPersonShooter',

    "One of my old side projects during my bachelor, it's completely open-source and may act as guidance for someone who just starts developing. I would highly recommend taking a look first at the Blueprint system, before digging into C++ code.\n" +
      '\n' +
      'The code is compatible with the Unreal Engine 4.26 version',

    'https://user-images.githubusercontent.com/11835209/112525104-d56e6e00-8da0-11eb-8b5b-8267b034ffc5.gif',
    '#!',
    'https://github.com/Napalys/FirstPersonShooter',
    [
      { src: ArchLogo, label: 'Arch linux' },
      { src: Cpp, label: 'C++' },
      { src: UnrealEngine, label: 'Unreal Engine 4' },
    ]
  ),
  // new Project(
  //   'Project Title',
  //   'Lorem ipsum dolor sit...',
  //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg',
  //   'https://example.com/live',
  //   'https://example.com/source',
  //   [
  //     { src: ArchLogo, label: 'Label 1' },
  //     { src: ArchLogo, label: 'Label 2' },
  //     { src: ArchLogo, label: 'Label 3' },
  //   ]
  // ),
];