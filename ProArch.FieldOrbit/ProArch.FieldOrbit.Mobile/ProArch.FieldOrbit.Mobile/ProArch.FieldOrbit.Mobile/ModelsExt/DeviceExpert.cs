﻿// Decompiled with JetBrains decompiler
// Type: ProArch.FieldOrbit.Models.DeviceExpert
// Assembly: ProArch.FieldOrbit.Models, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: B85466C5-147E-4F15-95F5-F5AA47647199
// Assembly location: C:\Users\naveenh\Desktop\ProArch.FieldOrbit.Mobile\ProArch.FieldOrbit.Mobile\References\ProArch.FieldOrbit.Models.dll

namespace ProArch.FieldOrbit.Models
{
  public class DeviceExpert : ModelBase
  {
    public int Id { get; set; }

    public Employee Employee { get; set; }

    public Device Device { get; set; }
  }
}
